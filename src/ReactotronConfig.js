import Reactotron from 'reactotron-react-native'

Reactotron.configure({
    name: 'Albumns Project'
    
    }) // controls connection & communication settings
Reactotron.useReactNative() // add all built-in react native plugins
Reactotron.connect() // let's connect!
Reactotron.clear()
console.tron = Reactotron