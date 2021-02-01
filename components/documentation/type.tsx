import * as D from '../../lib/liko-api';

function ComplexType({ type }: { type: D.ComplexLuaType }) {
    if (D.isSimpleType(type)) return <>{type}</>;
    else return <>{`${type[1]}/${type[3]}`}</>;
}

export default function Type({ type }: { type: D.LuaType }) {
    const types: D.ComplexLuaType[] = D.isMultipleTypes(type) ? type : [type];
    return <>{types.map((t, index) => <ComplexType key={index} type={t} />)}</>;
};