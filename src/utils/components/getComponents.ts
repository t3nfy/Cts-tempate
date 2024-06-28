import Component from "../../structures/base/Component";
import { ComponentType } from "../../types/Component";
import getAllFiles from "../files/getAllFiles";
import * as path from "path";

export default async (type: ComponentType): Promise<Component[]> => {
    let components = [];

    const componentFolders = getAllFiles(
        path.join(__dirname, "..", "..", type),
        true
    );

    for (const componentFolder of componentFolders) {
        const componentFiles = getAllFiles(componentFolder);

        for (const componentFile of componentFiles) {
            const componentObject = (await import(componentFile))
                .default as Component;

            components.push(componentObject);
        }
    }

    return components;
};
