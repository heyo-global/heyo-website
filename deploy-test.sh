#nvm use 14
#npm install -g firebase-tools
#firebase login
rm -r dist
# export NEXT_PUBLIC_BUILD_ENV=production
# echo build with env=$NEXT_PUBLIC_BUILD_ENV
yarn build:dev
rm -f firebase.json
ln -s firebase.test.json firebase.json
firebase deploy --only hosting:heyo-global-test
