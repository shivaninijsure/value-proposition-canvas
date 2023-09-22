export default function Icons(props) {

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css" />
            <div class="icon">
                <div class={props.IconName}></div>
            </div>
        </div>

    );

}