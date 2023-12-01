import commandFactory from '@/factory/command'
import { commandNames, REODER_DIRECTION } from '@/consts'

const command = {
    name: commandNames.REORDER,

    /**
     * Rotate an image
     * @param {Graphics} graphics - Graphics instance
     * @param {string} type - 'rotate' or 'setAngle'
     * @param {number} angle - angle value (degree)
     * @param {boolean} isSilent - is silent execution or not
     * @returns {Promise}
     */
    execute(graphics, id, direction) {
        return new Promise((resolve) => {
            const targetObj = graphics.getObject(id)
            console.log('direction', direction)
            if (direction === REODER_DIRECTION.UP) {
                graphics.bringForward(targetObj)
            } else {
                graphics.sendBackwards(targetObj)
            }
            this.undoData = { id, direction }
            resolve()
        })
    },

    /**
     * @param {Graphics} graphics - Graphics instance
     * @returns {Promise}
     */
    undo(graphics) {
        const { id, direction } = this.undoData
        const targetObj = graphics.getObject(id)
        if (direction === REODER_DIRECTION.UP) {
            graphics.sendBackwards(targetObj)
        } else {
            graphics.bringForward(targetObj)
        }
    },
}

commandFactory.register(command)

export default command
