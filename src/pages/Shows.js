import React from "react";
import jennieFront from '../lib/jennieFRONT.png'



class Shows extends React.Component {
    render() {
        return (
            <body> 

            <figure class="tourPicture">
              <img src={jennieFront} id="tourImage" alt="2023 Tour Promo"/>
              <h1>2023 TOUR DATES</h1>
            </figure>
          
            <br/>
          
            <table class="tourTable">
              <tr>
                <td>20 JAN</td>
                <td>PITEÅ</td>
                <td class="tickets"><a href="https://ticketmaster.com">TICKETS</a></td>
              </tr>
              <tr>
                <td>21 JAN</td>
                <td>UMEÅ</td>
                <td class="tickets"><a href="https://ticketmaster.com">TICKETS</a></td>
              </tr>
              <tr>
                <td>25 JAN</td>
                <td>STOCKHOLM</td>
                <td class="tickets"><a href="https://ticketmaster.com">TICKETS</a></td>
              </tr>
              <tr>
                <td>2 FEB</td>
                <td>MALMÖ</td>
                <td class="tickets"><a href="https://ticketmaster.com">TICKETS</a></td>
              </tr>
              <tr>
                <td>5 FEB</td>
                <td>BERLIN</td>
                <td class="tickets"><a href="https://ticketmaster.com">TICKETS</a></td>
              </tr>
              <tr>
                <td>10 FEB</td>
                <td>LONDON</td>
                <td class="tickets"><a href="https://ticketmaster.com">TICKETS</a></td>
              </tr>
            </table>
          </body>

        )
    }
}

export default Shows