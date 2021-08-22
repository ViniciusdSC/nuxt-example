const actions = require("./actions")
// @ponicode
describe("actions.default.findOneSistema", () => {
    test("0", () => {
        let callFunction = () => {
            actions.default.findOneSistema({ sistemas: { length: 5 } }, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actions.default.findOneSistema({ sistemas: { length: 1 } }, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actions.default.findOneSistema({ sistemas: { length: 1 } }, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            actions.default.findOneSistema({ sistemas: { length: 5 } }, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            actions.default.findOneSistema({ sistemas: { length: 10 } }, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            actions.default.findOneSistema(undefined, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
