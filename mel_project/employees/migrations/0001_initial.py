# Generated by Django 2.2.3 on 2019-07-27 04:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('employee_id', models.AutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('salary', models.IntegerField()),
                ('asn_per', models.IntegerField()),
                ('twenty_per', models.IntegerField()),
                ('fdn_per', models.IntegerField()),
                ('svc_per', models.IntegerField()),
                ('ucd_per', models.IntegerField()),
                ('sp_per', models.IntegerField()),
                ('tv_per', models.IntegerField()),
            ],
        ),
    ]
