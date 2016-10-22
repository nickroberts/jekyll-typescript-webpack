import '../sass/app.scss';

class App {
  constructor() {
    console.debug('App loaded...');
    $(document).ready(() => $(document).foundation());
  }
}

let app = new App();

export default app;
