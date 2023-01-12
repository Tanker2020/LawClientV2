import { useForm } from "@mantine/form";
import { Text,Badge,Avatar,Modal, Button, Group, InputBase,TextInput,Stepper,Tabs,Image,Autocomplete,Accordion,Card} from '@mantine/core';
import { IconSectionSign,IconDeviceMobile,IconMail,IconX,IconPhoto,IconMessageCircle,IconUserCircle,IconCheck,IconPigMoney,IconChevronsRight,IconAward,IconAd,IconTrophy } from '@tabler/icons';
import { showNotification,updateNotification} from "@mantine/notifications";
import {useState,useEffect } from "react";
import {motion,useAnimation } from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import InputMask from 'react-input-mask';


function sponsorform() {

    return (
        <div>
            <div>
                <Image style={{filter: 'brightness(20%)'}} height={150} src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></Image>
            </div>
            <Tabs color="teal" defaultValue="Sponsor Info" style={{textAlign: 'center'}}>
                <Tabs.List grow position="center">
                    <Tabs.Tab value="Sponsor Info" icon={<IconSectionSign size={14} />}>Sponsor Info</Tabs.Tab>
                    <Tabs.Tab value="Form" icon={<IconMessageCircle size={14} />}>Form</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="Sponsor Info" pt="xs">
                    <div style={{display: 'flex'}}>
                        <SomeInfo/>
                    </div>
                </Tabs.Panel>

                <Tabs.Panel value="Form" pt="xs">
                    <div style={{marginBottom: '10%'}}>
                        <Form/>
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    )
}

function Form() {
    const {ref,inView} = useInView()
    const [email, setEmail] = useState('');
    const animation = useAnimation()
    const animation2 = useAnimation()
    const form = useForm({
        validateInputOnChange: [
            'email'
        ],
        initialValues: {
            names: "",
            email: email,
            company: "",
            phone: ""
        },
        validate: {
            email: (value)=>(value.length < 0 ? "This Form is Required": null)
        }
    })
    const data =
      email.trim().length > 0 && !email.includes('@')
        ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${email}@${provider}`)
        : [];

    function Check(){
        showNotification({
            title: 'Loading',
            id: 'notification',
            message: 'Sending Data',
            loading: true,
            color: 'teal',
            icon: <IconCheck size={14} />,
            autoClose: 6000,
        });
        if (email.length>0){
            setTimeout(() => {
                updateNotification({
                    id: 'notification',
                    title: "Thank You",
                    message: "Your Form has been Submitted",
                    color: "teal",
                    icon: <IconCheck size={20} />,
                });
            }, 3000);
        }else{
            updateNotification({
                id: 'notification',
                title: "Error",
                message: "Please Fill the Form",
                color: "red",
                icon: <IconX size={20} />,
            });
        }
    }

    useEffect(()=>{
        if (inView){
            animation.start({
                x:0,
                transition: {
                    type: 'spring',damping: 7,stiffness: 50, repeat: null,duration: 1
                }
            })
            animation2.start({
                x:0,
                transition: {
                    type: 'spring',damping: 7,stiffness: 50, repeat: null,duration: 1
                }
            })
        }else if (!inView){
            animation.start({x:'100vw'})
            animation2.start({x:'-100vw'})
        }
        
        console.log("use effect hook, inView = ",inView)
      },[inView])
  
    return (
        <div ref={ref} style={{display: "flex",justifyContent: 'space-around',flexWrap: 'wrap'}}>
            <motion.div animate={animation} style={{margin: '5%'}}>
                <form style={{minWidth: '300%',marginBlock: '10%'}} onSubmit={form.onSubmit((values)=>console.log(values))}>
                    <TextInput styles={{input: {borderRadius: '10px',borderColor: 'teal'}}} label="Name" placeholder="Alex Arma" {...form.getInputProps('names')} />
                    <Autocomplete 
                        styles={{input: {borderRadius: '10px',borderColor: 'teal'}}}
                        withAsterisk
                        value={email}
                        onChange={setEmail}
                        label="Email"
                        placeholder="Your Email"
                        icon={<IconMail size={20} />}
                        data={data}
                    />
                    <TextInput styles={{input: {borderRadius: '10px',borderColor: 'teal'}}} label="Company" placeholder="Your Company" {...form.getInputProps('company')} />
                    <InputBase styles={{input: {borderRadius: '10px',borderColor: 'teal'}}} icon={<IconDeviceMobile/>} label="Phone Number" component={InputMask} mask="+9 (999)-999-9999" placeholder="+1 (213)-123-5678" {...form.getInputProps('phone')}/>
                    <motion.div style={{display: 'inline-block',margin: '2%'}}  whileHover={{scale: 1.2}} whileTap={{scale: .7}}>
                        <Button type="submit" onClick={()=>{Check(),form.setFieldValue('email',email)}} style={{margin: '2%'}} variant="outline" color="teal">
                            Submit
                        </Button>
                    </motion.div>
                </form>
            </motion.div>
            <motion.div animate={animation2} style={{width: '500px', margin: '5%'}}>
                <h1 style={{fontSize: 15}}>Important Team Members</h1>
                <Accordion styles={{
        item: {
          // styles added to all items
          backgroundColor: '',
          border: '1px solid teal',
          transition: 'transform 150ms ease',
          // styles added to expanded item
          '&[data-active]': {
            zIndex: 1,
            backgroundColor: 'black',
            transform: 'scale(1.05)',
          },
        },

        chevron: {
          // styles added to chevron when it should rotate
          '&[data-rotate]': {
            transform: 'rotate(-90deg)',
          },
        },
      }} variant="filled" defaultValue="customization">
                    <Accordion.Item value="Pranav">
                        <Accordion.Control>
                            <Group>
                                <Avatar color="teal" src={<IconUserCircle/>}/>
                                <p>Pranav</p>
                            </Group>
                        </Accordion.Control>  
                        <Accordion.Panel>BoilerPlate</Accordion.Panel>      
                    </Accordion.Item>
                    <Accordion.Item value="Nishanth">
                        <Accordion.Control>
                            <Group>
                                <Avatar color="teal" src={<IconUserCircle/>}/>
                                <p>Nishanth</p>
                            </Group>
                        </Accordion.Control>
                        <Accordion.Panel>boilerplate</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="Riti">
                        <Accordion.Control>
                            <Group>
                                <Avatar color="teal" src={<IconUserCircle/>}/>
                                <p>Riti</p>
                            </Group>
                        </Accordion.Control>
                        <Accordion.Panel>boilerplate</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="Neel">
                        <Accordion.Control>
                            <Group>
                                <Avatar color="teal" src={<IconUserCircle/>}/>
                                <p>Neel</p>
                            </Group>
                        </Accordion.Control>
                        <Accordion.Panel>boilerplate</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </motion.div>
        </div>
    );
  }

function Model(){
    const [opened, setOpened] = useState(false);
    const [active, setActive] = useState(0);

    return(
        <>
        <Modal
                centered
                size={"70%"}
                opened={opened}
                onClose={() => setOpened(false)}
                title="Dear Sponsors!"
                overlayBlur={5}
                transition="slide-down"
                transitionDuration={500}
                timingFunction="ease"
            >
                <p>As we begin to work on establishing our club, we recognize the several expenses that accompany running it such as the fees required to enter in National Mock Trial competitions, obtain access to high-quality research and material, and conduct other student-led activities aimed to enrich members’s knowledge about law. Because we are primarily relying on fundraising and sponsorships to fund these endeavors, we would be immensely grateful for any contributions that you are willing to make. In return, our club guarantees to promote our sponsors throughout the club and to a wider community at every given opportunity by displaying their logos on our website, social media accounts, and competition attire. This Law club strives to foster an environment that prioritizes the values of equity, integrity, and pride, and we believe you can help us achieve this vision through donations and sponsorships. Thank you in advance for your support and generosity.</p>
                <h1 style={{textAlign: 'center'}}>Path to our Success</h1> 
                <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                    <Stepper.Step icon={<IconPigMoney/>} completedIcon={<IconChevronsRight/>} label="First step" description="Sponsor Us">
                        Step 1 content: Fil out our form
                    </Stepper.Step>
                    <Stepper.Step icon={<IconAd/>} completedIcon={<IconChevronsRight/>} label="Second step" description="Talk about representation">
                        Step 2 content: T-Shirts/Logos and more
                    </Stepper.Step>
                    <Stepper.Step icon={<IconAward/>} completedIcon={<IconChevronsRight/>} label="Third step" description="Competition Time">
                        Step 3 content: We repsresent you at the competition
                    </Stepper.Step>
                    <Stepper.Step icon={<IconTrophy/>} completedIcon={<IconChevronsRight/>} label="Final step" description="Absolute success">
                        Step 4 content: See the final product
                    </Stepper.Step>
                </Stepper>
            </Modal>
            <Group position="center" style={{margin:'2%'}}>
                <Button onClick={() => setOpened(true)}>Why Sponsor Us?</Button>
            </Group>
        </>
    )
}

function SomeInfo(){
    return(
        <div style={{margin:'auto',marginTop: '5%',marginBottom: '20%'}}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section component="a">
                    <Image
                    src="/book.jpg"
                    height={260}
                    alt="Law Book"
                    />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>Why this Club was Created</Text>
                </Group>

                <Text size="sm" color="dimmed">
                    Joe Mama looks so zesty so wants pranav asdadadadadasdadasdadadasddasdadadadadadadadad
                </Text>

                <Model/>
            </Card>
        </div>
    )
}

export default sponsorform