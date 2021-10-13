import React, { lazy, Suspense  } from 'react';

import Typography from '@material-ui/core/Typography';
const Navbar = lazy(() => import('./Navbar'));


const renderLoader = () => <p>Loading</p>;

function AboutUs() {

    return (
        <>
        <Suspense fallback={renderLoader()}>
        <Navbar/>
        <br/>
        <div className="about-us">
        <Typography variant="h3" component="h3">
            Rreth Nesh
        </Typography>
        <br/><br/>
        <Typography variant="h5" component="h5">
            Ne kemi nje mision, te sigurojme nje shtepi per te gjithe shoket tane me kater putra.
        </Typography>
        <Typography variant="h4" component="h4" style={{marginTop:'10%'}}>
            Misioni yne
        </Typography>
        <Typography variant="body1" component="body1">
            Te sigurojme nje familje te kujdesshme per kafshet e rruges, perderisa ne menyre indirekte te ndihmojme ata qe kane frike nga to, ata qe mund te kene humbur kafshen e tyre ose thjesht ata qe duan nje anetar te ri ne familjen e tyre; dhe minimizimi i shumimit te qenve duke ulur kerkesen per kafshe shtepiake.
        </Typography>
        <Typography variant="h4" component="h4" style={{marginTop:'10%'}}>
            Vlerat tona
        </Typography>
        <Typography variant="body1" component="body1">
         Vlerat tona kryesore përfshijne transparencen (puna jone eshte publike); krijimi i nje platforme te sigurt, kualitative, me besim të lartë; edukimi dhe ndergjegjesimi i shoqerise; zhvillimi vullnetar dhe jofitimprures.
        </Typography>
        <Typography variant="h4" component="h4"  style={{marginTop:'10%'}}>
            Historia jone
        </Typography>
        <Typography variant="body1" component="body1">
            Historia jone filloi ne vitin 2021, Ipko Foundation prezantoi punetorine Upshift ne kolegjin Don Bosko. Grupi yne i perbere nga Olti, Arbi, Era, Dea dhe Rea vendosen qe te aplikonin me kete ide. Pas disa javesh, gjeten veten si fitues te Upshiftit dhe fondeve qe vinin me te. Ky website u financua nga Ipko Foundation, dhe u zhvillua nga Olt Latifi.
        </Typography>
        <Typography variant="h4" component="h4"  style={{marginTop:'10%'}}>
            “Gilani Network”
        </Typography>
        <Typography variant="body1" component="body1">
            Pas nje takimi produktiv te mbajtur me daten 12.10.2021 me administratoret e grupit te mirenjohur “Gilani Network” kemi arritur marreveshje bashkepunimi mes nesh, per promovimin e platformave te njera tjetres. Tash e tutje faqen tone do ta gjeni edhe ne grupin e facebook-ut “Gilani Network” te cilen tash e tutje do ta gjeni edhe ne faqen tone. Ju ftojme qe te na ndiqni :)
        </Typography>
        </div>

        </Suspense>
        
        </>
        );

  }

export default AboutUs;
  
