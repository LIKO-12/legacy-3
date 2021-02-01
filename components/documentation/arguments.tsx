import * as D from '../../lib/liko-api';
import Type from './type';

type ArgumentsProps = { args: D.Argument[] };
const Arguments: React.FC<ArgumentsProps> = ({ args }) => {
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

export default Arguments;