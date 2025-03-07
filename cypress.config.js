const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // Aqui carregamos o plugin do Mochawesome
      return config;
    },
    reporter: 'mochawesome',  // Usar Mochawesome para gerar o relatório
    reporterOptions: {
      reportDir: 'cypress/results',  // Pasta onde os relatórios em JSON e HTML serão gerados
      overwrite: false,  // Não sobrescrever relatórios anteriores
      html: true,  // Gerar relatório em HTML
      json: true,  // Gerar relatório em JSON
    },
    video: true,  // Gravar vídeos dos testes
    screenshotsFolder: 'cypress/screenshots',  // Pasta onde as capturas de tela serão salvas
    screenshotOnRunFailure: true,  // Tira screenshot quando o teste falha
  },
});
