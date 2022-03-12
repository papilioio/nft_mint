import express from 'express'

import getAccounts from './hardhat_functions/getAccounts'

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//CROS対応(ローカル開発環境戦用)
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.listen(3000, () => {
    console.log("Start on port 3000.")
})


/**
 * expressサーバーの状態表示
 * http://localhost:3000/にアクセスする
 */
app.get('/', async(req: express.Request, res: express.Response) => {
    const accounts = await getAccounts()
    res.send(JSON.stringify(accounts))
})
