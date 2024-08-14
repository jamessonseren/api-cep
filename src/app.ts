import express, { Response, Request, NextFunction, Router } from 'express'
import {router} from './routes'

import cors from 'cors'

const app = express()

app.use(cors())

app.use(router)

app.get('/', (req: Request, res: Response) => {
    res.send("Application running successfully")
})

// app.get("/address", (req: Request, res: Response) => {
//     res.send("address running successfully")


// })


export { app }