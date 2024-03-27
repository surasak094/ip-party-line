const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//const ipAddress = "192.168.0.103";
const port = 3000;

// ใช้ body-parser middleware เพื่ออ่าน body ของ request เป็น JSON
app.use(bodyParser.json());

// ตั้งค่า route เพื่อจำลอง URL http://192.168.1.100/status.json
app.get('/status.json', (req, res) => {
    // สร้าง JSON response ที่จำลอง
    const jsonResponse = {
        device_id: "1",
        node_name: "NCC",
        ip_address: "192.168.1.100",
        subnet_mask: "255.2555.255.0",
        gateway: "192.168.1.1",
        mac_address: "00:1A:2B:3C:4D:5E",
        serial_number: "ABC123456",
        software_version: "15.1",
        node_location: "NCC Substation",
        contract: "1234567890",
        installation_date: "2023-01-15",
        status: "up",
        interfaces: [
            {
                interface_id: 1,
                name: "eth0",
                description: "Ethernet interface 0",
                status: "up",
                ipv4_address: "192.168.1.100",
                ipv6_address: "fe80::1",
                speed: "1 Gbps",
                traffic: {
                    in: "100 Mbps",
                    out: "50 Mbps"
                }
            }
        ],
        multicast_ip: "224.1.1.1",
        multicast: [
            {
                multicast_group: 1,
                multicast_name: "EAST",
                multicast_port: "5001",
                multicast_status: "enable"
            },
            {
                multicast_group: 2,
                multicast_name: "RCC",
                multicast_port: "5002",
                multicast_status: "enable"
            },
            {
                multicast_group: 3,
                multicast_name: "BRCC",
                multicast_port: "5003",
                multicast_status: "enable"
            }
        ],
        snmp_read_community: "private",
        snmp_write_community: "private",
        temperature: "60",
        power: "48",
        cpu_utilization: "25%",
        memory_utilization: "60%",
        uptime: "5 days 12 hours",
        fault_management: {
            severity: "Minor",
            description: "Interface eth1 is down"
        },
        error_list: {
            error_mem_description: "No Response",
            error_mem_time: "2023-01-01 11:22:33",
            error_eth_description: "Lost",
            error_eth_time: "2023-01-01 11:22:33"
        }
    };

    // ส่ง JSON response กลับไปที่ client
    res.json(jsonResponse);
});

// เริ่มเซิร์ฟเวอร์ที่ port 3000
// app.listen(port, ipAddress, () => {
//     console.log(`Server is listening at http://${ipAddress}:${port}`);
// });
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
