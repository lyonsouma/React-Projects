// import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import { UserProvider } from './Contex';
// import CounterApp from './components/CounterApp';
// import HoverApp from './components/HoverApp';
// import NameList from './components/NameList';
// import Message from './components/Message';
// import Lyons from './components/Class';
// import Subscribe from './components/state';
// import Meso from './components/Test';
// import Properties from './components/Sample';
// import Property from './components/Sample';
// import Destru from './components/DestrucuteClass';
// import ParentComponent from './components/ParentComponent';
// import StateByLec from './components/StateByLec';
// import UserGreeting from './components/UserGreeting';
// import NameLists from './components/NameList';
// import Style from './components/Style';
// import Inline from './components/Inline';
// import Fragment from './components/ReactDemo';
// import './appStyle.css'
// import Form from './components/Form';
// import Style from './components/Style';
// import Table from './components/Table';
// import ErrorBoundry from './components/ErrorBoundry';
// import Hero from './components/Hero';
// import ClickedCounter from './components/ClickedCounter';
// import Count from './components/Count2';
// import Hover from './components/HoverCounter';
// import WorkCount from './components/WorkCount';
// import WorkHover from './components/WorkHover';
function App() {
  return (
    <div className="App">
      <UserProvider>
          <ComponentA/>
      </UserProvider>
      {/* <WorkCount name = 'Lyons' />
      <WorkHover name = 'Lyons' /> */}
      {/* <CounterApp name ='lyons'/> */}
      {/* <HoverApp/> */}
     {/* <ErrorBoundry>
     <Hero heroName="Joe"></Hero>
     <Hero heroName="Kelly"></Hero>
     <Hero heroName="joker"></Hero>
     </ErrorBoundry> */}
   {/* <Hover/> */}
   {/* <Count/> */}
{/* <ClickedCounter/> */}
      {/* <Table /> */}
    {/* <Fragment/> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={Style.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Style Primary = {true}/> */}
    {/* <NameLists/> */}
      {/* <StateByLec /> */}
       {/* <UserGreeting/> */}

    {/* <ParentComponent/> */}

    {/* <Destru name= 'Lyons'/> */}

    {/* <Property name = 'Daniel'/> */}

    {/* <Properties name = 'Lyons'/>
      <Properties name = 'John'/> */}

    {/* <Meso/> */}

    {/* <Subscribe/> */}

     {/* <h1>Hi Guys</h1>

     <Message name = "Kevin"></Message>
      <Message name = "Mercy"></Message>
      <Message name = "Lyons"></Message>

      <Lyons name="John" />
      <button>Click here</button> */}
    </div>
    
  );

  
}

export default App;
