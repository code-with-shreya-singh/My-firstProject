import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
function ProductListing() {
  return (
    <div>
      
    <Table border ="1" align="center">
      <thead>
        <tr>
          <th>Product Id</th>
          <th>Product Name</th>
          <th>Product Discription</th>
          <th>Product Price</th>
          <th>Product Image</th>
          <th>Image URL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>iPhone</td>
          <td>iPhone 13 - Matte Black</td>
          <td>1,20,500</td>
          <img src={"src\iphone.jpeg "}></img>
          <a href='G:\reactapp\my-firstproject\src\infinix.jpg'></a>
        </tr>
        <tr>
          <td>2</td>
          <td>Vivo T2x 5G </td>
          <td>You can experience outstanding 
            performance with the  video Vivo T2 x 5G 
            thanks to its 7 nm 5G proccessor.</td>
          <td>45,200</td>
          <img src="src\vivo.jpg"></img>
        </tr>
        <tr>
          <td>3</td>
          <td >Realme</td>
          <td>The company has expertise in
            distribution , ethical practices ,
            and good market share within a short period 
            realme is also proud to be an india Brand also
            we strongly exercise make in india belief andhave
            all it's  manudfucturing divisions within 
            our country.</td>
            <td>23,400</td>
            <img src= "src\realme.jpg"></img>
        </tr>
        <tr>
          <td>4</td>
          <td >Nokia</td>
          <td>All new redesigned Nokia mobile which is
            familiar and easy to useIsland style keypad
            phone with white key letteringHigh quality
            1.77" screenPre-loaded games including the 
            classic keypad mobile phone game-snack enjoy
            all new wireless FM radio listing.</td>
            <td>6,720</td>
            <img src="src\nokia.png"></img>
        </tr>
        <tr>
          <td>5</td>
          <td >OnePlus Nord 2T 5G</td>
          <td>Very good mobile nice performance good battery
             backup camera also very good overall nice value 
             of package</td>
             <td>28,999</td>
             <img src={'src\infinix.jpg'}></img>
        </tr>
        <tr>
          <td>6</td>
          <td >Infinix HOT 20 5G</td>
          <td>Take a step into the future of smartphone
            with the infinix Hot 20 5G. Featuring a 16.7cm
            (6.6)with a 120 Hz , this smartphones offers
            mesmerising visuals. </td>
            <td>9,000</td>
            <img src='src\infinix.jpg'></img>
        </tr>
        <tr>
          <td>7</td>
          <td >Jio Phone</td>
          <td>Special Flip Design with a sleek and 
            convenient shell design , the F40 in the
            palm of your hand or in your pocket with 
            ease.</td>
            <td>7,999</td>
            <img src='src\jiophone.jpg'></img>
        </tr>
        <tr>
          <td>8</td>
          <td >Sumsung GalaxyA 23</td>
          <td>As a result of the Nighttography feature 
          on the samsung  Galaxy S23 5G's improved AI
          ,low-light images  and videos come out vibrate</td>
          <td>9,9999</td>
          <img src='src\Sumsang 5G.jpg'></img>
        </tr>
        <tr>
          <td>9</td>
          <td >Sumsung</td>
          <td>The powerful processor and sophisticated camera
            sensor of the samsung Galaxy Ultra handle low
            light conditions and noise reduction .</td>
            <td>12,999</td>
            <img src='src\sumsung.jpg'></img>
        </tr>
        <tr>
          <td>10</td>
          <td >Oppo A78 5G</td>
          <td> Oppo Reno8 smartphone feature a 50 MP
              incredible sony IMX766 sensor at the rear
             and a terrific 32 MP IMX709 sensors at the 
             front that allows for impeccable colour 
             replication and enables.</td>
             <td>16,999</td>
             <img src='src\oppo.jpg'></img>
        </tr>
        
      </tbody>
    </Table>
    <Image></Image>
    </div>
  );
}
export default ProductListing;
  

 