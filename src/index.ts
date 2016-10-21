import '../sass/app.scss';

class App {
  constructor() {
    $(document).ready(() => $(document).foundation());
  }
}

let app = new App();

export default app;
