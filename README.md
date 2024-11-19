![Banner](https://i.hizliresim.com/2r25ulp.png)

# Film Arsiv

This project is a film archive that brings together all film platforms. Instead of going to each platform separately and searching for a movie and paying, you can find and watch all the movies on a single platform. This platform is a prototype and not a real platform. In order for it to be implemented, an agreement must be reached with all platforms. Commercial use of the project is prohibited.

# Contents
- [Film Arsiv](#film-arsiv)
- [Contents](#contents)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [File Structure](#file-structure)
- [Figma Design](#figma-design)
- [To Do](#to-do)
- [License](#license)

# Installation
```bash
git clone https://github.com/azateser/film-arsiv
```

# Usage
```bash
npm install
npx expo start
```

# Technologies
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![React Navigation](https://img.shields.io/badge/React_Navigation-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)

# File Structure
```bash
film-arsiv
├── assets
│   ├── global
│   ├── icons
│   ├── images
├── components
│   ├── Animated
│   ├── Layout
│   ├── ui
├── constants
├── hooks
├── mocks
├── screens
│   ├── Auth
│   ├── Categories
│   ├── Home
│   ├── Movies
│   ├── Profile
│   ├── Search
│   ├── Series
├── services        # Backend services are located in this folder and redux services.
```

# Figma Design


![Home](https://i.hizliresim.com/o5p59tn.jpeg)
![Video](https://i.hizliresim.com/etnwi62.jpeg)
![List](https://i.hizliresim.com/9dtel6t.jpeg)
![Settings](https://i.hizliresim.com/m1k1tf2.jpeg)
![Settings2](https://i.hizliresim.com/6em05wi.jpeg)

# To Do
- [] Auth Screen
    - [x] Login
    - [x] Register
    - [] Forgot Password
    - [x] Select Profile
    - [x] Subscription
    - [x] Welcome
- [] Home Screen
    - [x] Slider
    - [] Categories
    - [] Movies
    - [] Series
- [] Categories Screen
    - [] [CategoryName]
    - [] New
    - [] Popular
    - [] Recommended
- [] Movies Screen
    - [] [MovieName]
    - [] [MovieName] Details
- [] Series Screen
    - [] [SeriesName]
    - [] [SeriesName] Details
- [] Search Screen
- [] Profile Screen
    - [] Profile
    - [] Settings
    - [] Subscription
    - [] Watched
    - [] Favorite
- [] Video Screen
    - [] Video Player
    - [] Video Details

# License
[MIT](https://choosealicense.com/licenses/mit/)