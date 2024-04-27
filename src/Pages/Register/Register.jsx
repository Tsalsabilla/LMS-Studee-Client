import "./Register.css";
import { message, Space, Spin } from "antd";
import coverImage from "../../assets/images/cover.jpg";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((store) => store.auth);

    //alert api
    const [messageApi, contextHolder] = message.useMessage();

    //loading state
    const [loading, setLoading] = useState(false);

    //form state
    const [formData, setFormData] = useState({
        type: "",
        email: "",
        name: "",
        password: "",
    });

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className="login">
        <br />
        <div className="loginContainer">
          <div className="loginImage">
            <img src={coverImage}/>
          </div>
          <div className="loginDetail">
            <div>
            <h3 className="text-gray-700 text-xl font-medium">Studee</h3>
            </div>
  
            <div>
              {/* login form  */}
              <form onSubmit={handleFormSubmit}>
                <input
                  required
                  name="email"
                  value={formData.id}
                  onChange={handleFormChange}
                  type="email"
                  placeholder="Enter email"
                  className="p-2 my-2"
                />
                <input
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleFormChange}
                  type="password"
                  placeholder="Enter password"
                  className="p-2 my-2"
                />
                <select
                  name="type"
                  onChange={handleFormChange}
                  className="p-2 my-2"
                  // Anda juga dapat menambahkan kelas Tailwind pada elemen select
                >
                  <option value="">Select user type</option>
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
                  <option value="tutor">Guest</option>
                </select>
                <button type="submit" className="p-2 my-2">LOGIN</button>
              </form>
            </div>
          </div>
        </div>
  
        {/* loading indicator */}
        {contextHolder}
        {loading ? (
          <Space
            style={{
              width: "100vw",
              height: "100vh",
              position: "absolute",
              backgroundColor: "rgba(0,0,0,0.2)",
              top: "0",
              left: "0",
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <Spin size="large"></Spin>
          </Space>
        ) : null}
      </div>
    );
}

export default Register;