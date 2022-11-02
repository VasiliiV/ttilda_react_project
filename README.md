# Сайт регистрации на React

# Для работы или просмотра необходимо локально:
- создать папку
- склонировать репозиторий
- установить приложение реакт 
npx create-react-app my-app
cd my-app
- войти в index.js и внести изменения, которые ниже описаны
- запустить npm start

# закоментить строки:
- import './index.css'; (3)
- import App from './App'; (4)
- App в React.StrictMode (11)

# добавить, где все импорты:
- import Input from './elements/element';

- и в root добавить Input:
<React.StrictMode>
    <Input />
  </React.StrictMode>
  

