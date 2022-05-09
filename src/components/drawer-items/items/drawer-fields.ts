import setting_icon from '../../../assets/icon/setting-icon.svg'
import down_arrow_icon from '../../../assets/icon/down-arrow-icon.svg'
import user_setting_icon from '../../../assets/icon/user-setting-icon.svg'
import NFT_setting_icon from '../../../assets/icon/NFT-setting-icon.svg'
import matching_icon from '../../../assets/icon/matching-icon.svg'
import staking_icon from '../../../assets/icon/staking-icon.svg'
import roi_icon from '../../../assets/icon/roi-icon.svg'
import referrals_icon from '../../../assets/icon/referrals-icon.svg'
import page_setting_icon from '../../../assets/icon/page-setting-icon.svg'

export const drawerFields = [
  {
    title: '설정',
    icon: setting_icon,
    arrow: down_arrow_icon,
    child: [
      { title: '사이트 관리', params: 'site-managing' },
      { title: '관리자 계정 관리', params: 'admin-account-managing' },
      { title: '관리자 권한 관리', params: 'admin-authority-managing' },
    ],
  },
  {
    title: '회원설정',
    icon: user_setting_icon,
    arrow: down_arrow_icon,
    child: [
      { title: '회원관리', params: 'user-managing' },
      { title: '회원상세(트랜잭션)', params: 'user-transaction' },
    ],
  },
  {
    title: 'NFT 관리',
    icon: NFT_setting_icon,
    arrow: down_arrow_icon,
    child: [
      { title: 'NFT 등록', params: 'nft-register' },
      { title: 'NFT 관리', params: 'nft-managing' },
      { title: '수수료 관리', params: 'fees-managing' },
    ],
  },
  {
    title: '매칭',
    icon: matching_icon,
    arrow: down_arrow_icon,
    child: [
      { title: '경매관리', params: 'manage-auction' },
      { title: '결제대기', params: 'auction-list' },
      { title: '결제완료', params: 'matching-list' },
      { title: '연체', params: 'not-matching-list' },
      { title: '연체 해소', params: 'matching-able-list' },
      { title: '라운드이력', params: 'round-list' },
      { title: '일단위 라운드 관리', params: 'manage-auction-daily' },
    ],
  },
  {
    title: '스테이킹&스왑',
    icon: staking_icon,
    arrow: down_arrow_icon,
    child: [
      { title: '스테이킹 현황', params: 'staking-status' },
      { title: '스왑 현황', params: 'swap-status' },
    ],
  },
  {
    title: 'Roi',
    icon: roi_icon,
    arrow: down_arrow_icon,
    child: [
      { title: 'Roi 지급내역', params: 'roi-payment-details' },
      { title: 'Roi 관리', params: 'roi-managing' },
    ],
  },
  {
    title: '추천인',
    icon: referrals_icon,
    arrow: down_arrow_icon,
    child: [{ title: '추천인 수당 지급내역', params: 'logfeepayments' }],
  },
  {
    title: '페이지 설정',
    icon: page_setting_icon,
    arrow: down_arrow_icon,
    child: [{ title: '배너관리', params: 'banner-management' }],
  },
]
