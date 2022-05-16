import Image from 'next/image';

export default function Logo({ size }) {
  return (
    <Image src='/logo.png' alt='text' width={size} height={size}/>
  )
}

