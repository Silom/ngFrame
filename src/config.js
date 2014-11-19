exports.appVars = {
  companyName: 'Your Company',
  copyrightYear: 2014,
  projectName: 'ngFrame'
}

exports.authConfig = {
  roles: [
    'public',
    'user',
    'admin'
  ],

  accessLevels: {
    'public': "*",
    'anon': ['public'],
    'user': ['user'],
    'admin': ['admin']
  }
}
