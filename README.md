# Сайт регистрации на React

# Для работы или просмотра необходимо локально:
- создать папку
- склонировать репозиторий
- установить приложение реакт 
npx create-react-app my-app
cd my-app
- войти в index.js и внести изменения, которые ниже описаны

# закоментить:
- import './index.css';
- import App from './App';
- App в React.StrictMode

# добавить, где все импорты:
- import Input from './elements/element';

- и в root добавить <Input />:
<React.StrictMode>
   {/*  <App /> */}
    <Input />
  </React.StrictMode>
  
- запустить npm start
