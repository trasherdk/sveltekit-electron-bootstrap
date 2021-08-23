import Electron from "electron"
import WindowState from "electron-window-state"
import ContextMenu from "electron-context-menu"

export default class Window {

    private _instance: Electron.BrowserWindow
    private _state: WindowState.State = WindowState(Window.DEFAULT_STATE_OPTIONS)

    public static DEFAULT_STATE_OPTIONS: WindowState.Options = {
        defaultHeight: 720,
        defaultWidth: 1280
    }

    public static DEFAULT_WINDOW_OPTIONS: Electron.BrowserWindowConstructorOptions = {
        title: "Electron Application",
        width: Window.DEFAULT_STATE_OPTIONS.defaultWidth,
        height: Window.DEFAULT_STATE_OPTIONS.defaultHeight,
        webPreferences: {
            webSecurity: true,
            nodeIntegration: true,
            nativeWindowOpen: true
        }
    }

    public constructor(options: Electron.BrowserWindowConstructorOptions = Window.DEFAULT_WINDOW_OPTIONS) {
        options = {...options, ...{...Window.DEFAULT_WINDOW_OPTIONS, ...this._state}}
        this._instance = new Electron.BrowserWindow(options)

        ContextMenu({
            showSearchWithGoogle: false,
            showCopyImageAddress: false,
            showLookUpSelection: false,
            showCopyImage: false
        })

        this._state.manage(this._instance)

        this._instance.once("ready-to-show", () => {
            this._instance.show()
            this._instance.focus()
        })

        this._instance.on("close", () => {
            this._state.saveState(this._instance)
        })

    }

    public load(path: string) {
        this._instance.loadURL(path).catch(error => {
            console.log(`Failed to load ${path}, trying again...`)
            setTimeout(() => this.load(path), 200)
        })
    }

}
