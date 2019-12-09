import pandas as pd
from datetime import date


def file_processor(file):
    # Read in the File
    filepath = file
    df = pd.read_excel(filepath, sheet_name='Payroll Register')

    # Reassign column names
    df.columns = ['personnel', 'reg_hours', 'O/T_hours', 'H_3/4_hours', 'reg_earnings', 'O/T_earnings',
                  'E_3/4_earnings', 'E_5_earnings', 'gross', 'federal_deductions', 'state/local_deductions',
                  'voluntary_deductions', 'net_pay', 'memos']

    # Drop null values
    df.dropna(axis=0, subset=['personnel'], inplace=True)
    df.drop(df.index[0], axis=0, inplace=True)

    # Split name
    name = df.personnel.str.split("\n", expand=True)
    last_name = name[0].str.split(", ", expand=True)
    first_name = last_name[1].str.split(" ", expand=True)

    # Add split names to DF and drop original names
    df["last_name"] = last_name[0]
    df["first_name"] = first_name[1]
    df.drop(["personnel"], axis=1, inplace=True)
    df.drop(df[df["first_name"].isnull()].index, axis=0, inplace=True)
    df.reset_index(drop=True, inplace=True)

    # Split Deductions
    deductions = df["federal_deductions"].str.split("\n", expand=True)
    fit = deductions[0].str.split(" ", expand=True)
    ss = deductions[1].str.split(" ", expand=True)
    med = deductions[2].str.split(" ", expand=True)

    # Assign deductions to DF and drop original
    df["fit"] = fit[1]
    df["ss"] = ss[1]
    df["med"] = med[1]
    df.drop(["federal_deductions"], axis=1, inplace=True)

    # Split State taxes, assign and drop
    st_tax = df["state/local_deductions"].str.split(" ", expand=True)
    st_tax.drop([0, 1], axis=1, inplace=True)
    df["state_collecting"] = st_tax[2]
    df["amount_collected"] = st_tax[4]
    df.drop(["state/local_deductions"], axis=1, inplace=True)

    # Reorder columns
    cols = ['last_name', 'first_name', 'reg_hours', 'O/T_hours', 'H_3/4_hours', 'reg_earnings', 'O/T_earnings',
            'E_3/4_earnings', 'E_5_earnings', 'gross', 'fit', 'ss', 'med', 'state_collecting', 'amount_collected',
            'voluntary_deductions', 'memos', 'net_pay']
    df = df[cols]

    # Process voluntary deductions
    vd = df["voluntary_deductions"].str.split("\n", expand=True)
    for col_name in range(len(vd.columns)):
        df["voluntary_deduction_" + str(col_name + 1)] = vd[col_name]

    # Drop original
    df.drop(["voluntary_deductions"], axis=1, inplace=True)

    # Process net pay
    net_pay = df["net_pay"].str.split("\n", expand=True)
    df["net_pay"] = net_pay[3]

    # Process memos
    memo = df["memos"].str.split("\n", expand=True)
    for col_name in range(len(memo.columns)):
        col = memo[col_name].str.split(" ", expand=True)
        df["memo_type_" + str(col_name + 1)] = col[4] + " " + col[5]
        df["memo_" + str(col_name + 1) + "_value"] = col[8]

    # Drop memos
    df.drop(["memos"], axis=1, inplace=True)

    today = date.today()

    return df.to_excel('media/' + today.strftime("%b-%d-%Y") + '.xlsx')