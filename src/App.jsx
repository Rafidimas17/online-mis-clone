import {useState} from 'react'

import './App.css'

function App() {
  const [count,
    setCount] = useState(0)

  return ( <> <div className="container">
    <div className="header">
      <div className='header-content'>
        <img
          src="https://online.mis.pens.ac.id/images/pens.png?rnd=1148597181"
          alt="image banner for header"
          className="image-header"/>
        <font size="+1">
          <strong>Pembangunan Zona Integritas Menuju Wilayah Bebas dari Korupsi (ZI - WBK)
            <br></br>
            di "Kampus Inovasi" Politeknik Elektronika Negeri Surabaya - OnlineMiS</strong>
        </font>
      </div>
    </div>
    <div class="mainmenu">
		
<ul>
<li className="userout">
	<a href="#" title="login"> Login</a>
		<ul>
			<li><a href="#" title="login mahasiswa/dosen/staff">Mahasiswa/Dosen/Staff</a></li>
			<li><a href="#">Dosen Luar Biasa</a></li>
        </ul>
</li>
</ul>
 
	</div>
  <div className='content'>

  <div class="column-1">
		<img src="https://online.mis.pens.ac.id/image/logo.gif" width="300" height="180"/> <br></br> Powered by : <br />
		<img src="https://online.mis.pens.ac.id/images/LogoEDP_small.png"/>&nbsp;&nbsp;
			  </div>
        <div class="column-2">
										<p><font size="+1"><b>Selamat Datang di Online.MIS PENS</b></font></p>
							<p><font size="2">Anda dapat menikmati layanan kami secara online, seperti :</font></p>
							<ol>
							<li><font size="2">FRS</font></li>
							<li><font size="2">Daftar Ulang</font></li>
							<li><font size="2">Melihat Nilai per-semester</font></li>
							<li><font size="2">Melihat Absen Perkuliahan per-semester</font></li>
							<li><font size="2">Melihat Jadwal Kuliah per-semester</font></li>
							<li><font size="2">Melihat Pengumuman</font></li>
							<li><font size="2">Akses MIS Online via FB, YM dan GTalk</font></li>
							<li><font size="2">Fasilitas Akademik Lainnya</font></li>							
							<li><font size="2">Untuk login mahasiswa menggunakan @xx.student.pens.ac.id , xx=kode jurusan, dosen menggunakan @pens.ac.id</font></li>
							<li><font size="2">Download Tutorial E-Catalog PENS <a href="ecatalog.pdf" target="_blank">disini</a></font></li>							</ol>
							<p>Fasilitas akan dikembangkan terus<br/></p>
															
		</div>

    
</div>
<div id="footer">
      <p  style={{ textAlign: 'left',padding:"10px 0 20px 40px",alignItems:"center",display:"block" }}>EDP+Jarkom © 2011/2014 + WMY + (Mozilla Recommended)<br />
        Permasalahan email ke : <a href="mailto:eis@pens.ac.id">eis@pens.ac.id</a>
      </p>
      <hr />
      <div style={{ textAlign: 'center',padding:"20px",alignItems:"center",display:"block" }}>
        <a href="http://www.facebook.com/pens.siak" target="_blank" rel="noopener noreferrer">
          <img src="https://online.mis.pens.ac.id/images/facebook.png" alt="Facebook" width="30" height="30" />
        </a>
        <a href="http://www.twitter.com/infopens" target="_blank" rel="noopener noreferrer">
          <img src="https://online.mis.pens.ac.id/images/twitter.png" alt="Twitter" width="30" height="30" />
        </a>
        <a href="#">
          <img src="https://online.mis.pens.ac.id/images/YM.png" alt="Yahoo Messenger" title="id:pens.siak" width="30" height="30" />
        </a>
        <a href="#">
          <img src="https://online.mis.pens.ac.id/images/Gtalk.png" alt="Google Talk" title="id:pens.siak@gmail.com" width="30" height="30" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.eepis.mobile" target="_blank" rel="noopener noreferrer">
          <img src="https://online.mis.pens.ac.id/images/android.png" alt="Android" width="30" height="30" />
        </a>
      </div>
    </div>

  </div> 
  </>
  )
}

export default App