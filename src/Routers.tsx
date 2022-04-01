import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './page/main/Main'
import SiteManagement from './page/site-management/SiteManagement'
import AdminAccountManaging from './page/admin-account-managing/AdminAccountManaging'
import AdminAccountAuthority from './page/admin-account-authority/AdminAccountAuthority'
import UserManaging from './page/user-managing/UserManaging'
import UserTranSaction from './page/user-transaction/UserTransaction'
import NftRegister from './page/nft-register/NftRegister'
import NftRegisterOne from './page/nft-register/one/NftRegisterOne'
import NftRegisterMore from './page/nft-register/more/NftRegisterMore'
import NftManaging from './page/nft-managing/NftManaging'
import FeesManaging from './page/fees-managing/FeesManaging'
import AuctionList from './page/auction-list/AuctionList'
import StakingStatus from './page/staking-status/StakingStatus'
import MatchingStatus from './page/matching-status/MatchingStatus'
import NotMatchingList from './page/not-matching-list/NotMatchingList'
import AbleMatchingList from './page/able-matching-list/AbleMatchingList'
import SwapStatus from './page/swap-status/SwapStatus'
import RoiPaymentDetails from './page/roi-payment-details/RoiPaymentDetails'
import RoiManaging from './page/roi-managing/RoiManaging'
import PaymentDetails from './page/payment-details/payment-details'
import BannerManagement from './page/banner-management/BannerManagement'
import ManageAuction from './page/nft-managing/ManageAuction'
import RoundList from './page/round-list/RoundList'
import SignIn from './page/sign-in/SignIn'
const Routers = () => {
  return (
    <Routes>
      <Route path="/site-managing" element={<SiteManagement />} />

      <Route
        path="/admin-account-managing"
        element={<AdminAccountManaging />}
      />

      <Route path="/sign-in" element={<SignIn />} />
      <Route
        path="/admin-authority-managing"
        element={<AdminAccountAuthority />}
      />

      <Route path="/user-managing" element={<UserManaging />} />
      <Route path="/user-transaction" element={<UserTranSaction />} />

      <Route path="/nft-register" element={<NftRegister />} />
      <Route path="/nft-register/one" element={<NftRegisterOne />} />
      <Route path="/nft-register/more" element={<NftRegisterMore />} />
      <Route path="/nft-managing" element={<NftManaging />} />
      <Route path="/fees-managing" element={<FeesManaging />} />

      <Route path="/auction-list" element={<AuctionList />} />
      <Route path="/matching-list" element={<MatchingStatus />} />
      <Route path="/not-matching-list" element={<NotMatchingList />} />
      <Route path="/matching-able-list" element={<AbleMatchingList />} />
      <Route path="/round-list" element={<RoundList />} />

      <Route path="/staking-status" element={<StakingStatus />} />
      <Route path="/swap-status" element={<SwapStatus />} />

      <Route path="/roi-payment-details" element={<RoiPaymentDetails />} />
      <Route path="/roi-managing" element={<RoiManaging />} />

      <Route path="/payment-details" element={<PaymentDetails />} />

      <Route path="/banner-management" element={<BannerManagement />} />
      <Route path="/manage-auction" element={<ManageAuction />} />

      <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default Routers
