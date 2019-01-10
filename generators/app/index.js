'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  // Constructor(args, opts) {
  //   super(args, opts);
  // }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the laudable ' +
          chalk.red('ngx-firebase-bootstrap') +
          ' generator!'
      )
    );

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname // Default to current folder name
      },
      {
        type: 'input',
        name: 'apiKey',
        message: 'Your Firebase API Key'
      },
      {
        type: 'input',
        name: 'authDomain',
        message: 'Your Firebase Auth Domain'
      },
      {
        type: 'input',
        name: 'databaseURL',
        message: 'Your Firebase Database URL'
      },
      {
        type: 'input',
        name: 'storageBucket',
        message: 'Your Firebase Storage Bucket'
      },
      {
        type: 'input',
        name: 'messagingSenderId',
        message: 'Your Firebase Messaging Sender Id'
      }
      // {
      //   type: "confirm",
      //   name: "initGit",
      //   default: true,
      //   message: "Would you like me to init a git repo here?"
      // }
    ];

    return this.prompt(prompts).then(
      function (props) {
        // To access props later use this.props.someAnswer;
        this.props = props;
      }.bind(this)
    );
  }

  // Configuring() {
  //   if (this.props.initGit) {
  //     this.composeWith(require.resolve("generator-git-init"), {
  //       commit: "Initial commit by ngx-firebase-bootstrap generator"
  //     });
  //   }
  // }

  writing() {
    var toCopy = [
      './.editorconfig',
      './e2e/app.po.ts',
      './e2e/tsconfig.json',
      './karma.conf.js',
      './protractor.conf.js',
      './src/app/index.ts',
      './src/app/shared/auth.service.stub.ts',
      './src/app/shared/auth.service.ts',
      './src/app/shared/user-info.ts',
      './src/app/shared/logged-in-guard.ts',
      './src/assets/.gitkeep',
      './src/environments/environment.prod.ts',
      './src/environments/environment.ts',
      './src/favicon.ico',
      './src/main.ts',
      './src/polyfills.ts',
      './src/styles.css',
      './src/test.ts',
      './src/tsconfig.json',
      './src/typings.d.ts',
      './tslint.json'
    ];
    var toCopyTpl = [
      './angular.json',
      './e2e/app.e2e-spec.ts',
      './package.json',
      './package-lock.json',
      './README.md',
      './src/app/app.module.ts',
      './src/app/app.component.ts',
      './src/app/app.component.spec.ts',
      './src/app/display-user/display-user.component.css',
      './src/app/display-user/display-user.component.html',
      './src/app/display-user/display-user.component.spec.ts',
      './src/app/display-user/display-user.component.ts',
      './src/app/register-user/register-user.component.css',
      './src/app/register-user/register-user.component.html',
      './src/app/register-user/register-user.component.spec.ts',
      './src/app/register-user/register-user.component.ts',
      './src/app/login-user/login-user.component.css',
      './src/app/login-user/login-user.component.html',
      './src/app/login-user/login-user.component.spec.ts',
      './src/app/login-user/login-user.component.ts',
      './src/app/reset-password/reset-password.component.css',
      './src/app/reset-password/reset-password.component.html',
      './src/app/reset-password/reset-password.component.spec.ts',
      './src/app/reset-password/reset-password.component.ts',
      './src/app/app.component.css',
      './src/app/app.component.html',
      './src/app/pages/all-in-one-page.component.css',
      './src/app/pages/all-in-one-page.component.html',
      './src/app/pages/all-in-one-page.component.spec.ts',
      './src/app/pages/all-in-one-page.component.ts',
      './src/app/pages/dashboard-page.component.css',
      './src/app/pages/dashboard-page.component.html',
      './src/app/pages/dashboard-page.component.spec.ts',
      './src/app/pages/dashboard-page.component.ts',
      './src/app/pages/home-page.component.css',
      './src/app/pages/home-page.component.html',
      './src/app/pages/home-page.component.spec.ts',
      './src/app/pages/home-page.component.ts',
      './src/app/pages/login-page.component.css',
      './src/app/pages/login-page.component.html',
      './src/app/pages/login-page.component.spec.ts',
      './src/app/pages/login-page.component.ts',
      './src/app/pages/register-page.component.css',
      './src/app/pages/register-page.component.html',
      './src/app/pages/register-page.component.spec.ts',
      './src/app/pages/register-page.component.ts',
      './src/environments/firebaseConfig.ts',
      './src/index.html'
    ];
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
    var i;
    for (i = 0; i < toCopy.length; i++) {
      this.fs.copy(
        this.templatePath(toCopy[i]),
        this.destinationPath(toCopy[i])
      );
    }
    for (i = 0; i < toCopyTpl.length; i++) {
      this.fs.copyTpl(
        this.templatePath(toCopyTpl[i]),
        this.destinationPath(toCopyTpl[i]),
        this.props
      );
    }
  }

  install() {
    this.npmInstall();
  }
};
