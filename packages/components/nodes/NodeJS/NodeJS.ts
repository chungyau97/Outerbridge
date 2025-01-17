import {
    ICommonObject,
	INode, 
    INodeData, 
    INodeExecutionData, 
    INodeOptionsValue, 
    INodeParams, 
    NodeType,
} from '../../src/Interface';
import {
    returnNodeExecutionData
} from '../../src/utils';
import { NodeVM } from 'vm2';

class NodeJS implements INode {

    label: string;
    name: string;
    type: NodeType;
    description?: string;
    version: number;
	icon?: string;
    incoming: number;
	outgoing: number;
    inputParameters?: INodeParams[];

	constructor() {
	
		this.label = 'NodeJS';
		this.name = 'nodeJS';
		this.icon = 'nodejs.png';
        this.type ='action';
		this.version = 1.0;
		this.description = 'Execute code within NodeVM sandbox';
        this.incoming = 1;
        this.outgoing = 1;
		this.inputParameters = [
            {
				label: 'Code',
				name: 'code',
				type: 'code',
				default: `console.log($nodeData);\nconst example = 'Hello World!';\nreturn example;`,
                description: 'Custom code to run'
			},
        ] as INodeParams[];
	};

	async run(nodeData: INodeData): Promise<INodeExecutionData[] | null> {

		const returnData: ICommonObject[] = [];

		// Global object
		const sandbox = {
			$nodeData: nodeData,
		};

		const vm = new NodeVM({
			console: 'inherit',
			sandbox,
			require: {
				external: true,
				builtin: ['*'],
				root: "./",
			},
		});

		const inputParametersData = nodeData.inputParameters;

        if (inputParametersData === undefined) {
            throw new Error('Required data missing');
        }

        const code = inputParametersData.code as string || '';

		let responseData: any; // tslint:disable-line: no-any

		try {
			if (!code) responseData = [];
			else {
				responseData = (await vm.run(`module.exports = async function() {${code}}()`, __dirname));
			}
		} catch (e) {
			return Promise.reject(e);
		}

		if (Array.isArray(responseData)) {
            returnData.push(...responseData);
        } else {
            returnData.push(responseData);
        }

        return returnNodeExecutionData(returnData);
	}
}

module.exports = { nodeClass: NodeJS }