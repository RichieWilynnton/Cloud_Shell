import { SystemObject } from "@/enums/SystemObject";

// Nodes in FileSystemTree 
export class TreeNode {
    name: string;
    type: SystemObject;
    parent: TreeNode | null;
    children: TreeNode[];
    content: string;
    directory: string;
    constructor(name: string, type: SystemObject, parent: TreeNode | null = null, directory: string) {
        this.name = name;
        this.type = type;
        this.parent = parent;
        this.children = [];
        this.content = "";
        this.directory = directory;
    }

    addChild(child: TreeNode) : boolean {
        
        this.children.push(child);
        return true;
    }

    removeChild(childName : string) : boolean {
        this.children = this.children.filter((c) => c.name !== childName);
        // Error check if child is not in children

        return true;
    }
    
}