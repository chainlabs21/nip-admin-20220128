import React, { useState } from 'react'
import Papers from '../../components/paper/Papers'
import { Radio } from '@mui/material'
import ContainedButton from '../../components/input/button/ContainedButton'
import { RadioGroup } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NftRegister = () => {
  const [radio, setRadio] = useState<string>('1')
  const navigate = useNavigate()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setRadio(value)
  }

  const handleNftRegister = () => {
    if (radio === '1') {
      navigate('/nft-register/one')
    } else if (radio === '2') {
      navigate('/nft-register/more')
    }
  }

  return (
    <>
      <Papers title="NFT 등록">
        <section
          style={{
            display: 'flex',
            padding: '1rem',
          }}
        >
          <div style={{ width: '30%', marginTop: '8px' }}>몬스터 등록</div>
          <div style={{ width: '70%' }}>
            <article>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="1"
                name="radio-buttons-group"
                onChange={onChange}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="개별 등록"
                />
                <span>
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="일괄 등록"
                  />
                  <span
                    style={{
                      color: '#FF5050',
                      fontSize: '14px',
                    }}
                  >
                    생설할 수 있는 몬스터의 수는 97마리 입니다.
                  </span>
                </span>
              </RadioGroup>
            </article>
          </div>
        </section>

        <section
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '1rem',
          }}
        >
          <ContainedButton subject="등록" handleOpen={handleNftRegister} />
        </section>
      </Papers>
    </>
  )
}

export default NftRegister
