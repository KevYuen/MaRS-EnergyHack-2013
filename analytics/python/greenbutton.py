import requests


class GreenButton(object):
    def __init__(self):
        self.base_url = 'https://greenbutton.affsys.com/ldc/api/v1/UsagePoint'

    def getUsagePointData(self, token, start, duration):
        headers = {'Authorization': 'Bearer %s' % token}
        url = '%s?start=%s&duration=%s' % (self.base_url, start, duration)
        r = requests.get(url, headers=headers, verify=False)
        return r.text