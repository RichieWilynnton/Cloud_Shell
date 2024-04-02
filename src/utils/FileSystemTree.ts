import { SystemObject } from "@/enums/SystemObject";
import { TreeNode } from "./TreeNode";
import { SystemResponse } from "@/interfaces/SystemResponse";

// Tree for storing all directories and files. Includes functions to handle commands.
export class FileSystemTree {
    root: TreeNode;
    currentDirectory : TreeNode;
    constructor() {
        this.root = new TreeNode("root", SystemObject.Directory, null);
        this.currentDirectory = this.root;
    }

    // For fetching user info from database
    init() : void {}

    // Return all the children of the current directory
    ls() : SystemResponse<String[]> {
        return { success: true, data: this.currentDirectory.children.map((child) => child.name) };
    }

    // Change the current directory
    // cd(path:string) : SystemResponse<null> {
    //     return { success: true, data: null };
    // }

    // Make a new directory
    // mkdir() : SystemResponse<null> {}
    

}