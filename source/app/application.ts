
import 'dotenv/config'
import Electron from "electron"
import Window from "./window"
import Server from "./server"

export default class Application {

    private _instance: Electron.App
    private _window: Window | undefined
    private _server: Server

    private _port: number = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5000

    public constructor () {
        this._instance = Electron.app
        this._server = new Server(this._port)
        this._instance.once("ready", async () => {
            await this._server.start(() => this.createWindow())
            this._instance.on("activate", () => this.createWindow())
            this._instance.on("window-all-closed", () => this.quit())
        })
    }

    private createWindow (options: Electron.BrowserWindowConstructorOptions = Window.DEFAULT_WINDOW_OPTIONS): void {
        if (!this._window) this._window = new Window(options)
        this._window.load(`http://localhost:${this.env === 'dev' ? 3000 : this._port}`)
    }

    private async quit (): Promise<void> {
        await this._server.stop()
        return Promise.resolve(this._instance.quit())
    }

    public get env (): "prod" | "dev" {
        return this._instance.isPackaged ? "prod" : "dev"
    }

}
