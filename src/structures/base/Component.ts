import { ButtonRun, MenuRun, ModalRun } from "../../types/Component";

export default class Component {
    constructor(
        public name: string,

        public run: ButtonRun | MenuRun | ModalRun
    ) { }
}
