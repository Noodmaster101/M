
import Link from "next/link"
export default function Home() {
  return (
    <> 
    <center>
      <h1>บริการเช่ารถออนไลน์g </h1>
    </center>

    <center> <h1> 
      <Link href="/"> หน้าแรก</Link> |
      <Link href="/about"> เกี่ยวกับเรา</Link> |
      <Link href="/service"> บริการของเรา</Link> |      
      <Link href="/contact"> ติดต่อเรา</Link> |
        </h1></center>
    </>
  );
}
