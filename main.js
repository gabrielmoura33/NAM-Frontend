const electron = require('electron');
// Controlar a vida da aplicação
const app = electron.app;
// Criar janela do navegador nativo.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  // Criar a janela do navegador
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // Carrega o index.html do aplicativo
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/public/index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  );

  // Evento emitido quando a janela está fechada
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Este método será chamado quando o Electron terminar a
// inicialização e estiver pronto para criar janelas do navegador
// Algumas APIs só podem ser usadas depois que esse evento ocorrer
app.on('ready', createWindow);

// Sair quando todas as janelas estiverem fechadas
app.on('window-all-closed', () => {
  // No macOS é comum que os aplicativos e sua barra de menu
  // permaneçam ativos até que o usuário saia explicitamente com Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Emitido quando o aplicativo é ativado
app.on('activate', () => {
  // No macOS é comum recriar uma janela no aplicativo quando o ícone
  // dock é clicado e não há outras janelas abertas
  if (mainWindow === null) {
    createWindow();
  }
});
