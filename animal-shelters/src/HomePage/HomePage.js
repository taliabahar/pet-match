import HomeTitle from '../HomeTitle/HomeTitle';
import React from 'react';
import Button from 'react-bootstrap/Button';
import './HomePage.css';
//import Quiz from "./Quiz";
//import Gallery from "../Gallery";

export default function HomePage({ setData }) {
  return (
    <div>
      <HomeTitle />

      <div className="body">
        <Button variant="danger">Take Quiz</Button>
        <br />
        <br />
        <Button variant="danger">View Gallery</Button>
      </div>
    </div>
  );
}

// API 1: Petfinder ~ https://www.petfinder.com/developers/
// https://www.petfinder.com/developers/v2/docs/
// Key: LwGIeP1a6wzNz4Lp3INHoN2Imwo0HLcIP1kbqGfaihYV8eXVDg
// Secret: 5cUDxU0lmFHC4bMYbp9vfbfVOV6NPreNOi9OnNcW

// curl -d "grant_type=client_credentials&client_id=LwGIeP1a6wzNz4Lp3INHoN2Imwo0HLcIP1kbqGfaihYV8eXVDg&client_secret=5cUDxU0lmFHC4bMYbp9vfbfVOV6NPreNOi9OnNcW" https://api.petfinder.com/v2/oauth2/token

// curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJMd0dJZVAxYTZ3ek56NExwM0lOSG9OMkltd28wSExjSVAxa2JxR2ZhaWhZVjhlWFZEZyIsImp0aSI6ImJmMjI0NmJiY2E0ODk0ZGM0NjkzOWNmYjgxNGFhZjEwMjczN2M2N2QzYjEzYTIxMWJiOWY3NzdiMDkwZTgzYjIzOGM1OWM5M2UxMzhlYjU5IiwiaWF0IjoxNTg3NzQ5MDgzLCJuYmYiOjE1ODc3NDkwODMsImV4cCI6MTU4Nzc1MjY4Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.xwaUXkqHYdcb_x3__NlzPdwBszN2egUKwiKrWWUuyYL_ekXM3JRxw9LZlxZUDGecf5S7OYpyNasLXZYahMbNkhpRfxPVYc-LkZWBtnOVMe7K0_CHlr5yPvQvVAS9VyWUot8MrI0R2G-mcGzrKu9nYbSjU9WVHoN3PJTPJ-mZCtn7wd-hR-BPdL3gIBE4_9z0XPDWdEaa2kZdPzX5zacI7O7vDHfoEtkH6J7GiRbSCUti3asDHysxQ3FRD_xg2pCOga7sSDBT-fByFCqo_emzZkfunyyb1maicGjjyrME_mVCwPRW8pim6pHEoPcWeiRbG_8wz1dFHi_n0ilmPBke1Q" https://api.petfinder.com/v2/animals?type=dog&page=2
