const app = require('./src/app');

app.listen(app.get('port'), () => {
  console.log('App is running on port', app.get('port'));
});
