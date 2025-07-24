import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export interface TabProp{
    title   : string;
    eventKey: string;
    content : React.ReactNode;
}

export interface TabsProp{
    activeKey       : number;
    id              : string;
    className       : string;
    variant         : string;
    color           : string;
}

export interface Props{
    tabProps: TabProp[];
    tabsProp: TabsProp;
}

const FilledTab = ({tabProps, tabsProp}: Props) => {
    return (
        <Tabs
            defaultActiveKey={tabProps[tabsProp.activeKey].eventKey}
            id={tabsProp.id} 
            className={tabsProp.className}
            justify>
        {tabProps.map((tabProp, i) => (
            <Tab key={tabProp.eventKey} eventKey={tabProp.eventKey} title={tabProp.title}>
                {tabProp.content}
            </Tab>
        ))}
        </Tabs>
    );
}

export default FilledTab;