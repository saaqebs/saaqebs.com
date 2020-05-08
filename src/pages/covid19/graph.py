import pandas as pd
import matplotlib.pyplot as plt
from urllib import request, response, error
import cgi

url = 'https://raw.githubusercontent.com/saaqebs/covid19-newjersey/master/nj_total.csv'


def date_nicer(date):
    form = {'-2020': '', '-': ' ', 'april': 'April', 'march': 'March'}
    for error in form:
        date = date.replace(error, form[error])
    return date


def get_graph_for_municipality(municipal, df_historical):
    data = df_historical[df_historical['NJ Municipality'] == municipal.lower()]
    plt.plot(data['Number of Cases'])
    plt.xticks([0, 5, 10, 14])
    plt.xlabel('Date')
    plt.ylabel('Number of Cases')
    plt.title('Tracking COVID-19 Cases in {}'.format(municipal))
    plt.show()


def __main__():
    df_historical = pd.read_csv(url)
    df_historical['Date'] = df_historical['Date'].apply(date_nicer)
    df_historical = df_historical.set_index('Date')
    form = cgi.FieldStorage()
    searchterm = form.getvalue('searchbox')
    get_graph_for_municipality(searchterm, df_historical)
    return "hello"


if __name__ == "__main__":
    __main__()
