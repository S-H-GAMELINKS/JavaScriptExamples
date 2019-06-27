
(() => {
    const application = Stimulus.Application.start()

    let doms = []

    application.register("dom", class extends Stimulus.Controller {
        static get targets() {
            return ["input", "content"]
        }

        Add() {
            doms.push(`<p>${this.inputTarget.value}</p>`)

            this.contentTarget.innerHTML = ""

            for (let i = 0; i < doms.length; i++) {
                this.contentTarget.innerHTML += doms[i]
            }
            this.inputTarget.value = ""
        }

        Remove() {
            doms.pop()

            this.contentTarget.innerHTML = ""

            for (let i = 0; i < doms.length; i++) {
                this.contentTarget.innerHTML += doms[i]
            }
        }
    })
})()