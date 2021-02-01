import highlight from "highlight.js";
import * as D from '../../lib/liko-api';

interface CodeProps {
    parent?: string,
    name: string,
    args: D.Argument[] | undefined,
    returns: D.ReturnValue[] | undefined
}
export default function Code({ parent, name, args, returns }: CodeProps) {

    const exampleCode = [];

    if (returns) exampleCode.push(returns.map((ret) => ret.name).join(', ') + ' = '); // 'ret1, ret2, ... = '
    if (parent) exampleCode.push(parent + '.'); // 'GPU.'
    exampleCode.push(name + '('); // '_systemMessage('
    if (args) exampleCode.push(args.map((arg) => D.isLiteralArgument(arg) ? arg.default : arg.name).join(', ')); // 'arg1, arg2, ...'
    exampleCode.push(')'); // ')'

    return <pre><code className="language-lua" dangerouslySetInnerHTML={{__html: highlight.highlight('Lua', exampleCode.join('')).value}}/></pre>;
}