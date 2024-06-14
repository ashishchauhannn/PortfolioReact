# Steps for deploying project in github pages 

add these data into package.json file
  "homepage": "https://ashishchauhannn.github.io/PortfolioReact",


   "predeploy": "npm run build",
    "deploy": "gh-pages -d build",

after adding those data 
npm run deploy       -run this cmd in terminal
