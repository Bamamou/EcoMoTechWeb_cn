// src/components/JobDetails.tsx

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { jobPostings } from "@/utils/careersData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

const ACADEMIC_LEVELS = [
  "高中",
  "学士学位",
  "硕士学位",
  "博士学位",
  "其他",
];

const EXPERIENCE_LEVELS = [
  "0-1 年",
  "1-3 年",
  "3-5 年",
  "5-10 年",
  "10+ 年",
];

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = jobPostings.find((j) => j.id === id);
  const [formData, setFormData] = useState<{
    academicLevel: string;
    experience: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    resume: File | null;
    coverLetter: string;
    linkedin: string;
  }>({
    academicLevel: "",
    experience: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    linkedin: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  if (!job) {
    return <div>未找到职位</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.resume && formData.resume.size > 5 * 1024 * 1024) {
      alert("简历文件大小必须小于 5MB");
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        formDataToSend.append(key, value);
      }
    });
    formDataToSend.append("jobId", id);
    formDataToSend.append("jobTitle", job.title);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("提交申请失败");
      }

      setShowSuccessDialog(true);
    } catch (error) {
      console.error("提交申请时出错:", error);
      alert("提交申请失败。请稍后再试。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const SuccessDialog = () => (
    <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-gray-800">
            感谢您的申请！
          </DialogTitle>
          <DialogDescription className="text-center space-y-4">
            <p className="text-lg text-gray-600">
              感谢您对加入 EcoMoTech 团队的兴趣。
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800">
                您的申请已成功提交。我们的团队将仔细审查您的资历，并尽快与您联系。
              </p>
            </div>
            <p className="text-gray-600">
              同时，欢迎您了解更多关于我们公司的信息，并在 LinkedIn 上关注我们以获取最新动态。
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4">
          <Button
            onClick={() => {
              setShowSuccessDialog(false);
              navigate("/join-us");
            }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8"
          >
            返回职业页面
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-ecomotech-blue to-blue-600">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {job.department}
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                📍 {job.location}
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                💼 {job.type}
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <section className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  关于此职位
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {job.description}
                </p>
              </section>
              <section className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  职责
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  要求
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  福利
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {job.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 shadow-xl sticky top-8 h-fit"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                申请此职位
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700">
                      名字
                    </Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700">
                      姓氏
                    </Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    电子邮件
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-gray-700">
                    LinkedIn 个人资料网址（可选）
                  </Label>
                  <Input
                    id="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/in/your-profile"
                    value={formData.linkedin}
                    onChange={(e) =>
                      setFormData({ ...formData, linkedin: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">
                    电话
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                {/* Academic & Experience */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="academicLevel" className="text-gray-700">
                      学历
                    </Label>
                    <Select
                      value={formData.academicLevel}
                      onValueChange={(val) =>
                        setFormData({ ...formData, academicLevel: val })
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="选择您的学历" />
                      </SelectTrigger>
                      <SelectContent>
                        {ACADEMIC_LEVELS.map((lvl) => (
                          <SelectItem key={lvl} value={lvl}>
                            {lvl}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-gray-700">
                      工作经验
                    </Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(val) =>
                        setFormData({ ...formData, experience: val })
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="选择经验水平" />
                      </SelectTrigger>
                      <SelectContent>
                        {EXPERIENCE_LEVELS.map((lvl) => (
                          <SelectItem key={lvl} value={lvl}>
                            {lvl}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Resume */}
                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-gray-700">
                    简历（仅限 PDF，最大 5MB）
                  </Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf"
                    required
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      if (file && file.size > 5 * 1024 * 1024) {
                        alert("文件大小必须小于 5MB");
                        e.target.value = "";
                        return;
                      }
                      setFormData({ ...formData, resume: file });
                    }}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    请上传 PDF 格式的简历，最大 5MB
                  </p>
                </div>

                {/* Cover Letter */}
                <div className="space-y-2">
                  <Label htmlFor="coverLetter" className="text-gray-700">
                    求职信（可选）
                  </Label>
                  <Textarea
                    id="coverLetter"
                    className="h-32"
                    value={formData.coverLetter}
                    onChange={(e) =>
                      setFormData({ ...formData, coverLetter: e.target.value })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg text-lg font-semibold transform hover:scale-[1.02] transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      正在提交...
                    </span>
                  ) : (
                    "提交申请"
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <SuccessDialog />
    </Layout>
  );
};

export default JobDetails;


