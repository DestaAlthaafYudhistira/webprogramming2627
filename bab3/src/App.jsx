import './App.css'
import {Navigate, Route, Routes} from 'react-router-dom'
import TransaksiItem from './component/TransaksiItem'
import KartuRingkasan from './component/KartuRingkasan'
import Badge from './component/Badge'
import WalletSummary from './component/WalletSummary'
// import transaksi Item 
// import kartu Ringkasan
// import badge
// WalletSummary


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/transaksi" replace />} />
      <Route path="/transaksi" element={<TransaksiItem />} />
      <Route path="/ringkasan" element={<KartuRingkasan />} />
      <Route
        path="/badge"
        element={<Badge tipe="Pemasukan">+ Rp 50.000</Badge>}
      />
      <Route path="/wallet" element={<WalletSummary />} />
    </Routes>
  )
}
export default App;