import * as D from '../../lib/liko-api';
import Type from './type';

export default function({ args }: { args: D.Argument[] }){
    return (<ul>
        {args.map((arg, index) => {
            return (<li key={index}>
                <b>
                    {D.isLiteralArgument(arg) ? <code>{arg.default}</code> : arg.name}
                    {' '}(<Type type={arg.type} />)
                    {D.isVariableArgument(arg) && arg.default !== undefined ? <>{' '}(Default: <code>{arg.default}</code>)</> : null}
                    {arg.description ? ': ' : null}
                </b>
                {arg.description ?? null}
            </li>);
        })}
    </ul>);
};