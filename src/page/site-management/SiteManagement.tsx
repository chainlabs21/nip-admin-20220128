import React from 'react'
import Papers from '../../components/paper/Papers'
import ButtonGroup from '../../components/input/button/ButtonGroup'
import { siteManagementBody } from '../../components/paper/fields/site-management-body'
import PaperBodyContent from '../../components/paper/PaperBodyContent'

const SiteManagement = () => {
  return (
    <>
      <Papers title="사이트 관리">
        <section>
          <div>
            <PaperBodyContent fields={siteManagementBody} />
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <ButtonGroup first="취소" second="저장" />
          </div>
        </section>
      </Papers>
    </>
  )
}

export default SiteManagement
