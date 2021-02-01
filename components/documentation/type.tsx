import * as D from '../../lib/liko-api';

type ComplexTypeProps = { type: D.ComplexLuaType };
function ComplexType({ type }: ComplexTypeProps) {
    if (D.isSimpleType(type)) return <>{type}</>;
    else return <>{`${type[1]}/${type[3]}`}</>;
}

type TypeProps = { type: D.LuaType };
const Type: React.FC<TypeProps> = ({ type }) => {
    const types: D.ComplexLuaType[] = D.isMultipleTypes(type) ? type : [type];
    return <>{types.map((t, index) => <ComplexType key={index} type={t} />)}</>;
};

export default Type;